#include "./include/utils.h"
#include <node_api.h>

/** Module Initialization 🚀 */
napi_value Init(napi_env env, napi_value exports) {
    // -- Add Function
    napi_value addFn;
    napi_create_function(env, NULL, 0, Add, NULL, &addFn);
    napi_set_named_property(env, exports, "add", addFn);

    // -- Subtract Function
    napi_value subtractFn;
    napi_create_function(env, NULL, 0, Subtract, NULL, &subtractFn);
    napi_set_named_property(env, exports, "subtract", subtractFn);

    // -- nth root of a number Function
    napi_value nthRootFn;
    napi_create_function(env, NULL, 0, NthRoot, NULL, &nthRootFn);
    napi_set_named_property(env, exports, "nthRoot", nthRootFn);

    // -- string functions
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

    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
