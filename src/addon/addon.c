#include "./include/utils.h"
#include <node_api.h>

void InitMathFunctions(napi_env env, napi_value exports);
void InitStringFunctions(napi_env env, napi_value exports);
void InitUUIDFunctions(napi_env env, napi_value exports);
void InitArrayFunctions(napi_env env, napi_value exports);

/** Module Initialization 🚀 */
napi_value Init(napi_env env, napi_value exports) {
    InitMathFunctions(env, exports);
    InitStringFunctions(env, exports);
    InitUUIDFunctions(env, exports);
    InitArrayFunctions(env, exports);
    return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
