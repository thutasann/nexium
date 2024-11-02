#ifndef UTILS_H
#define UTILS_H

#include <node_api.h>

// ------ Math Functions

napi_value Add(napi_env env, napi_callback_info info);
napi_value Subtract(napi_env env, napi_callback_info info);
napi_value NthRoot(napi_env env, napi_callback_info info);
napi_value MatrixMultiply(napi_env env, napi_callback_info info);

// ------ String Functions

napi_value TrimStart(napi_env env, napi_callback_info info);
napi_value TrimEnd(napi_env env, napi_callback_info info);
napi_value IsEmpty(napi_env env, napi_callback_info info);
napi_value ToTitleCase(napi_env env, napi_callback_info info);
napi_value IsPalindrome(napi_env env, napi_callback_info info);
napi_value CountOccurrences(napi_env env, napi_callback_info info);
napi_value ReverseString(napi_env env, napi_callback_info info);
napi_value StripHTMLTags(napi_env env, napi_callback_info info);
napi_value RemoveDuplicates(napi_env env, napi_callback_info info);
napi_value InsertStringAt(napi_env env, napi_callback_info info);
napi_value GetWordsArray(napi_env env, napi_callback_info info);
napi_value Slugify(napi_env env, napi_callback_info info);
napi_value CamelToSnake(napi_env env, napi_callback_info info);
napi_value SnakeToCamel(napi_env env, napi_callback_info info);
napi_value ToKebabCase(napi_env env, napi_callback_info info);
napi_value EndsWith(napi_env env, napi_callback_info info);
napi_value ReplaceString(napi_env env, napi_callback_info info);
napi_value ReplaceDiacritics(napi_env env, napi_callback_info info);
napi_value GenerateRandomString(napi_env env, napi_callback_info info);

// ------ UUID Functions

napi_value GenerateUUID(napi_env env, napi_callback_info info);
napi_value ParseUUID(napi_env env, napi_callback_info info);
napi_value IsValidUUID(napi_env env, napi_callback_info info);
napi_value BytesToUUID(napi_env env, napi_callback_info info);

// ------ Number Functions

napi_value ClampFunction(napi_env env, napi_callback_info args);
napi_value InRangeRunction(napi_env env, napi_callback_info args);

// ------ Array Functions

napi_value ChunkArray(napi_env env, napi_callback_info info);
napi_value CreateUniqueArray(napi_env env, napi_callback_info info);

#endif
