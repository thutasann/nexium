#include "../include/utils.h"
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