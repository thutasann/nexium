#ifndef UTILS_H
#define UTILS_H

#include <node_api.h>

// ------ Math Functions

napi_value Add(napi_env env, napi_callback_info info);
napi_value Subtract(napi_env env, napi_callback_info info);
napi_value NthRoot(napi_env env, napi_callback_info info);

// ------ String Functions

napi_value TrimStart(napi_env env, napi_callback_info info);
napi_value TrimEnd(napi_env env, napi_callback_info info);
napi_value IsEmpty(napi_env env, napi_callback_info info);
// napi_value PadStart(napi_env env, napi_callback_info info);
// napi_value PadEnd(napi_env env, napi_callback_info info);
// napi_value ToTitleCase(napi_env env, napi_callback_info info);

#endif
