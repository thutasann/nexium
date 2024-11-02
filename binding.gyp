{
  "targets": [
    {
      "target_name": "nexium",
      "sources": [
        "src/addon/addon.c",
        "src/addon/utils/math.c",
        "src/addon/utils/string.c",
        "src/addon/utils/uuid.c",
        "src/addon/utils/array.c",
        "src/addon/shared/string_helpers.c",
        "src/addon/shared/array_helpers.c",
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