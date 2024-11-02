#include "./include/utils.h"
#include <node_api.h>

/** Init Maths functions */
void InitMathFunctions(napi_env env, napi_value exports) {
    napi_value addFn, subtractFn, nthRootFn, matrixMultiplyFn;

    napi_create_function(env, NULL, 0, Add, NULL, &addFn);
    napi_set_named_property(env, exports, "add", addFn);

    napi_create_function(env, NULL, 0, Subtract, NULL, &subtractFn);
    napi_set_named_property(env, exports, "subtract", subtractFn);

    napi_create_function(env, NULL, 0, NthRoot, NULL, &nthRootFn);
    napi_set_named_property(env, exports, "nthRoot", nthRootFn);

    napi_create_function(env, NULL, 0, MatrixMultiply, NULL, &matrixMultiplyFn);
    napi_set_named_property(env, exports, "matrixMultiply", matrixMultiplyFn);
}
