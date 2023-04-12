import { describe, expect, test } from "vitest";
import { camelize, deepEqual } from "@/utils/helper";

describe("camelize", ()=> {
  test.each([
    ["MyProp", "MyProp"],
    ["MyProp", "MyProp"],
    ["kebab-case", "kebabCase"],
    ["multi-hyphen-string", "multiHyphenString"],
    ["drag-class", "dragClass"],
    ["test-", "test-"]
  ])("transform %s into %s", (value, expected)=> {
    const actual = camelize(value);
    expect(actual).toEqual(expected);
  });
});

describe("deepEqual", ()=> {
  const values = [
    "true",
    "false",
    "0",
    "123",
    "'abc'",
    "{ }",
    "{ a: 123 }",
    "{ a: null }",
    "{ a: 'foo', b: 'bar' }",
    "{ a: 123, b: { } }",
    "{ a: 123, b: { foo: 'bar' } }",
    "{ a: 123, b: { answer: 42 } }",
    "{ a: 123, b: { foo: 'bar', answer: 42 } }",
    "[ ]",
    "[ 123 ]",
    "[ 'abc' ]",
    "[ null ]",
    "[ , , ]",
    "[ , 123 ]",
    "[ , 'abc' ]",
    "[ , null ]",
    "[ 123, 'abc' ]",
    "[ { foo: 'bar' } ]",
    "[ { answer: 42 } ]",
    "[ { foo: 'bar', answer: 42 } ]",
  ];

  test.each([...values, null, undefined])
  ("returns true when both are %s", (code)=> {
    let varA = 1, varB = 2;
    eval(`varA = ${code}; varB = ${code}`);
    expect(deepEqual(varA, varB)).toBeTruthy();
  });

  test.each(values)
  ("returns false when nullish against %s", (code)=> {
    let varA = eval(`(${code})`);
    expect(deepEqual(varA, null)).toBeFalsy();
    expect(deepEqual(null, varA)).toBeFalsy();
    expect(deepEqual(varA, undefined)).toBeFalsy();
    expect(deepEqual(undefined, varA)).toBeFalsy();
  });

  describe.each(values)("returns false when %s...", (codeA)=> {
    test.each(values.filter(c => c !== codeA))
    ("...against %s", (codeB)=> {
      let varA = 1, varB = 2;
      eval(`varA = ${codeA}; varB = ${codeB}`);
      expect(deepEqual(varA, varB)).toBeFalsy();
      expect(deepEqual(varB, varA)).toBeFalsy();
    });
  });
});
