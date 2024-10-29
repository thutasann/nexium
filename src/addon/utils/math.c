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

/** Function to multiply two matrices */
napi_value MatrixMultiply(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value args[2];

    // Parse arguments
    napi_get_cb_info(env, info, &argc, args, NULL, NULL);

    // Check if we received exactly two arguments (both matrices)
    if (argc < 2) {
        napi_throw_error(env, NULL, "Two matrices are required.");
        return NULL;
    }

    // Get dimensions of matrix A
    uint32_t rowsA, colsA;
    napi_get_array_length(env, args[0], &rowsA); // Rows of matrix A
    napi_value rowA;
    napi_get_element(env, args[0], 0, &rowA);
    napi_get_array_length(env, rowA, &colsA); // Columns of matrix A

    // Get dimensions of matrix B
    uint32_t rowsB, colsB;
    napi_get_array_length(env, args[1], &rowsB); // Rows of matrix B
    napi_value rowB;
    napi_get_element(env, args[1], 0, &rowB);
    napi_get_array_length(env, rowB, &colsB); // Columns of matrix B

    // Check if the matrices can be multiplied
    if (colsA != rowsB) {
        napi_throw_error(env, NULL, "Invalid matrix dimensions for multiplication.");
        return NULL;
    }

    // Prepare the result matrix
    napi_value result;
    napi_create_array_with_length(env, rowsA, &result);

    for (uint32_t i = 0; i < rowsA; i++) {
        napi_value resultRow;
        napi_create_array_with_length(env, colsB, &resultRow);

        for (uint32_t j = 0; j < colsB; j++) {
            double sum = 0;

            for (uint32_t k = 0; k < colsA; k++) {
                napi_value valA, valB;
                double elemA, elemB;

                // Get element from matrix A
                napi_get_element(env, args[0], i, &rowA);
                napi_get_element(env, rowA, k, &valA);
                napi_get_value_double(env, valA, &elemA);

                // Get element from matrix B
                napi_get_element(env, args[1], k, &rowB);
                napi_get_element(env, rowB, j, &valB);
                napi_get_value_double(env, valB, &elemB);

                sum += elemA * elemB;
            }

            // Set the computed sum to result matrix
            napi_value resultElement;
            napi_create_double(env, sum, &resultElement);
            napi_set_element(env, resultRow, j, resultElement);
        }

        napi_set_element(env, result, i, resultRow);
    }

    return result;
}
