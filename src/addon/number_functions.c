#include "./include/utils.h"
#include <node_api.h>

/** Init Number functions */
void InitNumberFunctions(napi_env env, napi_value exports) {
    napi_value clamp_fn;
    napi_create_function(env, NULL, 0, ClampFunction, NULL, &clamp_fn);
    napi_set_named_property(env, exports, "clamp", clamp_fn);

    napi_value inrange_fn;
    napi_create_function(env, NULL, 0, InRangeRunction, NULL, &inrange_fn);
    napi_set_named_property(env, exports, "inRange", inrange_fn);

    napi_value roundto_fn;
    napi_create_function(env, NULL, 0, RoundTo, NULL, &roundto_fn);
    napi_set_named_property(env, exports, "roundTo", roundto_fn);

    napi_value generate_random_fn;
    napi_create_function(env, NULL, 0, GenerateRandomNumber, NULL, &generate_random_fn);
    napi_set_named_property(env, exports, "generateRandom", generate_random_fn);

    napi_value convert_ordinal_fn;
    napi_create_function(env, NULL, 0, ConvertToOrdinal, NULL, &convert_ordinal_fn);
    napi_set_named_property(env, exports, "toOrdinal", convert_ordinal_fn);
}
