#include "./include/utils.h"
#include <node_api.h>

/** Init Array functions */
void InitArrayFunctions(napi_env env, napi_value exports) {
    napi_value chunk_array_fn;
    napi_create_function(env, NULL, 0, ChunkArray, NULL, &chunk_array_fn);
    napi_set_named_property(env, exports, "chunkArray", chunk_array_fn);

    napi_value unique_array_fn;
    napi_create_function(env, NULL, 0, CreateUniqueArray, NULL, &unique_array_fn);
    napi_set_named_property(env, exports, "uniqueArray", unique_array_fn);

    napi_value count_non_repeating_fn;
    napi_create_function(env, NULL, 0, CountNonRepeating, NULL, &count_non_repeating_fn);
    napi_set_named_property(env, exports, "countNonRepeating", count_non_repeating_fn);

    // ------ sort functions
    napi_value bubble_sort_fn;
    napi_create_function(env, NULL, 0, BubbleSort, NULL, &bubble_sort_fn);
    napi_set_named_property(env, exports, "bubbleSort", bubble_sort_fn);

    napi_value quick_sort_fn;
    napi_create_function(env, NULL, 0, QuickSort, NULL, &quick_sort_fn);
    napi_set_named_property(env, exports, "quickSort", quick_sort_fn);
}
