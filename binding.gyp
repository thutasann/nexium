{
  "targets": [
    {
      "target_name": "nexium",
      "sources": [
        "src/addon/addon.c",
        "src/addon/math_functions.c",
        "src/addon/string_functions.c",
        "src/addon/array_functions.c",
        "src/addon/uuid_functions.c",
        "src/addon/number_functions.c",
        "src/addon/utils/math.c",
        "src/addon/utils/string.c",
        "src/addon/utils/uuid.c",
        "src/addon/utils/array.c",
        "src/addon/utils/sort.c",
        "src/addon/utils/leetcodes.c",
        "src/addon/utils/number.c",
        "src/addon/shared/string_helpers.c",
        "src/addon/shared/array_helpers.c",
        "src/addon/shared/number_helpers.c",
        "src/addon/shared/sort_helpers.c",
        "src/addon/shared/leetcode_helpers.c",
      ],
      "include_dirs": [
        "<!@(node -e \"require('node-addon-api').include\")"
      ],
      "cflags!": ["-fno-exceptions"],
      "cflags": [
        "-std=c11",
        "-Os",
        "-ffunction-sections",
        "-fdata-sections",
        "-flto"
      ],
      "ldflags": [
        "-Wl,--gc-sections",
        "-Wl,--strip-all",
        "-s",
        "-flto"
      ]
    }
  ]
}