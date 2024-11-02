#include "../include/number_helpers.h"
#include "../include/utils.h"
#include <math.h>
#include <node_api.h>

/** Function to restrict a number to be within a specified range */
napi_value ClampFunction(napi_env env, napi_callback_info args) {
    size_t argc = 3;
    napi_value argv[3];
    napi_get_cb_info(env, args, &argc, argv, NULL, NULL);

    int32_t number, min, max;
    napi_get_value_int32(env, argv[0], &number);
    napi_get_value_int32(env, argv[1], &min);
    napi_get_value_int32(env, argv[2], &max);

    int32_t result = clamp(number, min, max);

    napi_value napi_result;
    napi_create_int32(env, result, &napi_result);
    return napi_result;
}

/** Function to check if a number falls within a specified range */
napi_value InRangeRunction(napi_env env, napi_callback_info args) {
    size_t argc = 3;
    napi_value argv[3];
    napi_get_cb_info(env, args, &argc, argv, NULL, NULL);

    int32_t number, start, end;
    napi_get_value_int32(env, argv[0], &number);
    napi_get_value_int32(env, argv[1], &start);
    napi_get_value_int32(env, argv[2], &end);

    bool result = inRange(number, start, end);

    napi_value napi_result;
    napi_get_boolean(env, result, &napi_result);
    return napi_result;
}