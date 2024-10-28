#include "../include/utils.h"
#include <math.h>
#include <node_api.h>

/** Function to Add two Values */
napi_value Add(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];
    napi_value result;

    // Get the arguments passed from JavaScript
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    // Convert arguments from napi_value to double
    double value1, value2;
    napi_get_value_double(env, args[0], &value1);
    napi_get_value_double(env, args[1], &value2);

    // Perform addition
    double sum = value1 + value2;

    // Convert the result back to napi_value and return
    napi_create_double(env, sum, &result);
    return result;
}

/** Function to Subtract two Values */
napi_value Subtract(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];
    napi_value result;

    // Get the arguments passed from JavaScript
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    // Convert arguments from napi_value to double
    double value1, value2;
    napi_get_value_double(env, args[0], &value1);
    napi_get_value_double(env, args[1], &value2);

    // Perform subtraction
    double difference = value1 - value2;

    // Convert the result back to napi_value and return
    napi_create_double(env, difference, &result);
    return result;
}

/** Function to calculate the nth root of a number.  */
napi_value NthRoot(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];
    napi_get_cb_info(env, info, &argc, argv, NULL, NULL);

    double base, n;
    napi_get_value_double(env, argv[0], &base);
    napi_get_value_double(env, argv[1], &n);

    double result = pow(base, 1.0 / n);

    napi_value jsResult;
    napi_create_double(env, result, &jsResult);
    return jsResult;
}