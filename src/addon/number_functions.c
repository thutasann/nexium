#include "./include/utils.h"
#include <node_api.h>

/** Init Number functions */
void InitNumberFunctions(napi_env env, napi_value exports) {
    napi_value clamp_fn;
    napi_create_function(env, NULL, 0, ClampFunction, NULL, &clamp_fn);
    napi_set_named_property(env, exports, "clamp", clamp_fn);
}
