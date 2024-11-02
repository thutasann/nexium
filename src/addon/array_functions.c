#include "./include/utils.h"
#include <node_api.h>

/** Init Array functions */
void InitArrayFunctions(napi_env env, napi_value exports) {
    napi_value chunk_array_fn;
    napi_create_function(env, NULL, 0, ChunkArray, NULL, &chunk_array_fn);
    napi_set_named_property(env, exports, "chunkArray", chunk_array_fn);
}
