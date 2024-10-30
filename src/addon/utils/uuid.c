#include "../include/utils.h"
#include <ctype.h>
#include <uuid/uuid.h>

/** Function to Generate UUID */
napi_value GenerateUUID(napi_env env, napi_callback_info info) {
    uuid_t binuuid;
    uuid_generate(binuuid);
    char uuid_str[37]; // UUID string format "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    uuid_unparse(binuuid, uuid_str);

    for (int i = 0; i < 36; i++) {
        uuid_str[i] = (char)tolower(uuid_str[i]);
    }

    napi_value result;
    napi_create_string_utf8(env, uuid_str, NAPI_AUTO_LENGTH, &result);
    return result;
}