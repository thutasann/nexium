#include "./include/utils.h"
#include <node_api.h>

/** Module Initialization 🚀 */
napi_value Init(napi_env env, napi_value exports) {
    // ------------------------ Maths functions 🚀
    napi_value addFn;
    napi_create_function(env, NULL, 0, Add, NULL, &addFn);
    napi_set_named_property(env, exports, "add", addFn);

    napi_value subtractFn;
    napi_create_function(env, NULL, 0, Subtract, NULL, &subtractFn);
    napi_set_named_property(env, exports, "subtract", subtractFn);

    napi_value nthRootFn;
    napi_create_function(env, NULL, 0, NthRoot, NULL, &nthRootFn);
    napi_set_named_property(env, exports, "nthRoot", nthRootFn);

    napi_value matrixMultiplyFn;
    napi_create_function(env, NULL, 0, MatrixMultiply, NULL, &matrixMultiplyFn);
    napi_set_named_property(env, exports, "matrixMultiply", matrixMultiplyFn);

    // ------------------------ String functions 🚀
    napi_value trimStartFn;
    napi_create_function(env, NULL, 0, TrimStart, NULL, &trimStartFn);
    napi_set_named_property(env, exports, "trimStart", trimStartFn);

    napi_value trimEndFn;
    napi_create_function(env, NULL, 0, TrimEnd, NULL, &trimEndFn);
    napi_set_named_property(env, exports, "trimEnd", trimEndFn);

    napi_value isEmptyFn;
    napi_create_function(env, NULL, 0, IsEmpty, NULL, &isEmptyFn);
    napi_set_named_property(env, exports, "isEmpty", isEmptyFn);

    napi_value toTitleCaseFn;
    napi_create_function(env, NULL, 0, ToTitleCase, NULL, &toTitleCaseFn);
    napi_set_named_property(env, exports, "toTitleCase", toTitleCaseFn);

    napi_value isPalindromeFn;
    napi_create_function(env, NULL, 0, IsPalindrome, NULL, &isPalindromeFn);
    napi_set_named_property(env, exports, "isPalindrome", isPalindromeFn);

    napi_value countOccurrencesFn;
    napi_create_function(env, NULL, 0, CountOccurrences, NULL, &countOccurrencesFn);
    napi_set_named_property(env, exports, "countOccurrences", countOccurrencesFn);

    napi_value reverseFn;
    napi_create_function(env, NULL, 0, ReverseString, NULL, &reverseFn);
    napi_set_named_property(env, exports, "reverse", reverseFn);

    napi_value stripHTMLFn;
    napi_create_function(env, NULL, 0, StripHTMLTags, NULL, &stripHTMLFn);
    napi_set_named_property(env, exports, "stripHTML", stripHTMLFn);

    napi_value removeDuplicatesFn;
    napi_create_function(env, NULL, 0, RemoveDuplicates, NULL, &removeDuplicatesFn);
    napi_set_named_property(env, exports, "removeDuplicates", removeDuplicatesFn);

    napi_value insertStringAtFn;
    napi_create_function(env, NULL, 0, InsertStringAt, NULL, &insertStringAtFn);
    napi_set_named_property(env, exports, "insertStringAt", insertStringAtFn);

    napi_value getWordsArrayFn;
    napi_create_function(env, NULL, 0, GetWordsArray, NULL, &getWordsArrayFn);
    napi_set_named_property(env, exports, "getWordsArray", getWordsArrayFn);

    napi_value slugifyFn;
    napi_create_function(env, NULL, 0, Slugify, NULL, &slugifyFn);
    napi_set_named_property(env, exports, "slugify", slugifyFn);

    napi_value camelToSnakeFn;
    napi_create_function(env, NULL, 0, CamelToSnake, NULL, &camelToSnakeFn);
    napi_set_named_property(env, exports, "camelToSnake", camelToSnakeFn);

    napi_value snakeToCamelFn;
    napi_create_function(env, NULL, 0, SnakeToCamel, NULL, &snakeToCamelFn);
    napi_set_named_property(env, exports, "snakeToCamel", snakeToCamelFn);

    napi_value kebabFn;
    napi_create_function(env, NULL, 0, ToKebabCase, NULL, &kebabFn);
    napi_set_named_property(env, exports, "toKebabCase", kebabFn);

    napi_value endWidthFn;
    napi_create_function(env, NULL, 0, EndsWith, NULL, &endWidthFn);
    napi_set_named_property(env, exports, "endsWith", endWidthFn);

    napi_value replaceStringFn;
    napi_create_function(env, NULL, 0, ReplaceString, NULL, &replaceStringFn);
    napi_set_named_property(env, exports, "replaceString", replaceStringFn);

    napi_value replaceDiacriticsFn;
    napi_create_function(env, NULL, 0, ReplaceDiacritics, NULL, &replaceDiacriticsFn);
    napi_set_named_property(env, exports, "replaceDiacritics", replaceDiacriticsFn);

    napi_value generateRandomStringFn;
    napi_create_function(env, NULL, 0, GenerateRandomString, NULL, &generateRandomStringFn);
    napi_set_named_property(env, exports, "generateRandomString", generateRandomStringFn);

    // ------------------------ UUID functions 🚀
    napi_value generateUUIDFn;
    napi_create_function(env, NULL, 0, GenerateUUID, NULL, &generateUUIDFn);
    napi_set_named_property(env, exports, "generateUUID", generateUUIDFn);

    napi_value parseUUIDFn;
    napi_create_function(env, NULL, 0, ParseUUID, NULL, &parseUUIDFn);
    napi_set_named_property(env, exports, "parseUUID", parseUUIDFn);

    napi_value isValidUUIDFn;
    napi_create_function(env, NULL, 0, IsValidUUID, NULL, &isValidUUIDFn);
    napi_set_named_property(env, exports, "isValidUUID", isValidUUIDFn);

    napi_value bytesToUUIDFn;
    napi_create_function(env, NULL, 0, BytesToUUID, NULL, &bytesToUUIDFn);
    napi_set_named_property(env, exports, "bytesToUUID", bytesToUUIDFn);

    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
