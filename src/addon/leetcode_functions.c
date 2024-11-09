#include "./include/utils.h"
#include <node_api.h>

/** Init LeetCodes functions */
void InitLeetCodesFunctions(napi_env env, napi_value exports) {
    napi_value twosum_fn;
    napi_create_function(env, NULL, 0, TwoSum, NULL, &twosum_fn);
    napi_set_named_property(env, exports, "twoSum", twosum_fn);
}
