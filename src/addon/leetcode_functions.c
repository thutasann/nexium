#include "./include/utils.h"
#include <node_api.h>

/** Init LeetCodes functions */
void InitLeetCodesFunctions(napi_env env, napi_value exports) {
    napi_value twosum_fn;
    napi_create_function(env, NULL, 0, TwoSum, NULL, &twosum_fn);
    napi_set_named_property(env, exports, "twoSum", twosum_fn);

    napi_value longest_substring_fn;
    napi_create_function(env, NULL, 0, LongestSubstring, NULL, &longest_substring_fn);
    napi_set_named_property(env, exports, "longestSubstring", longest_substring_fn);

    napi_value isValidParentheses_fn;
    napi_create_function(env, NULL, 0, IsValidParentheses, NULL, &isValidParentheses_fn);
    napi_set_named_property(env, exports, "isValidParentheses", isValidParentheses_fn);

    napi_value isValidAnagram_fn;
    napi_create_function(env, NULL, 0, IsValidAnagram, NULL, &isValidAnagram_fn);
    napi_set_named_property(env, exports, "isValidAnagram", isValidAnagram_fn);

    napi_value reverseInteger_fn;
    napi_create_function(env, NULL, 0, ReverseInteger, NULL, &reverseInteger_fn);
    napi_set_named_property(env, exports, "reverseInteger", reverseInteger_fn);
}
