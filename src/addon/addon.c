#include "./include/utils.h"
#include <node_api.h>

/** Module Initialization */
napi_value Init(napi_env env, napi_value exports) {
    napi_value addFunction, subtractFunction;

    // ----- Math functions
    napi_create_function(env, NULL, 0, Add, NULL, &addFunction);
    napi_set_named_property(env, exports, "add", addFunction);

    napi_create_function(env, NULL, 0, Subtract, NULL, &subtractFunction);
    napi_set_named_property(env, exports, "subtract", subtractFunction);

    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
