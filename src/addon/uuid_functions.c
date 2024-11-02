#include "./include/utils.h"
#include <node_api.h>

/** Init UUID functions */
void InitUUIDFunctions(napi_env env, napi_value exports) {
    napi_value generateUUIDFn;
    napi_create_function(env, NULL, 0, GenerateUUID, NULL, &generateUUIDFn);
    napi_set_named_property(env, exports, "generateUUID", generateUUIDFn);

    napi_value parseUUIDFn;
    napi_create_function(env, NULL, 0, ParseUUID, NULL, &parseUUIDFn);
    napi_set_named_property(env, exports, "parseUUID", parseUUIDFn);

    napi_value isValidUUIDFn;
    napi_create_function(env, NULL, 0, IsValidUUID, NULL, &isValidUUIDFn);
    napi_set_named_property(env, exports, "isValidUUID", isValidUUIDFn);

    napi_value bytesToUUIDFn;
    napi_create_function(env, NULL, 0, BytesToUUID, NULL, &bytesToUUIDFn);
    napi_set_named_property(env, exports, "bytesToUUID", bytesToUUIDFn);
}
