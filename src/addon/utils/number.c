#include "../include/number_helpers.h"
#include "../include/utils.h"
#include <math.h>
#include <node_api.h>
#include <stdlib.h>

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

/** Function to round a number to a specific number of decimal places  */
napi_value RoundTo(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    double number;
    int decimalPlaces;

    napi_get_value_double(env, args[0], &number);
    napi_get_value_int32(env, args[1], &decimalPlaces);

    double result = roundTo(number, decimalPlaces);

    napi_value napiResult;
    napi_create_double(env, result, &napiResult);

    return napiResult;
}

/** Function to generate random integer between min and max (inclusive) */
napi_value GenerateRandomNumber(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    int min, max;
    napi_get_value_int32(env, args[0], &min);
    napi_get_value_int32(env, args[1], &max);

    int result = generateRandom(min, max);

    napi_value output_result;
    napi_create_int32(env, result, &output_result);
    return output_result;
}

/** Function to convert number to ordinal */
napi_value ConvertToOrdinal(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value args[1];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    int number;
    napi_get_value_int32(env, args[0], &number);

    char *ordinalResult = convertToOrdinal(number);

    napi_value napiResult;
    napi_create_string_utf8(env, ordinalResult, NAPI_AUTO_LENGTH, &napiResult);

    free(ordinalResult);
    return napiResult;
}

/** Function to convert number to currency string */
napi_value ConvertToCurrency(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value args[3];
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    double amount;
    char locale[50];
    char currency[10];

    napi_get_value_double(env, args[0], &amount);
    napi_get_value_string_utf8(env, args[1], locale, sizeof(locale), NULL);
    napi_get_value_string_utf8(env, args[2], currency, sizeof(currency), NULL);

    char *result = formatCurrency(amount, locale, currency);
    if (result == NULL) {
        napi_throw_error(env, NULL, "Failed to format currency");
        return NULL;
    }

    napi_value jsResult;
    napi_create_string_utf8(env, result, NAPI_AUTO_LENGTH, &jsResult);

    free(result);
    return jsResult;
}