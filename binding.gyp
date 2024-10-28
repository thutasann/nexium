{
  "targets": [
    {
      "target_name": "nexium",
      "sources": [
        "src/addon/addon.c",
        "src/addon/utils.c",
      ],
      "include_dirs": [
        "<!@(node -e \"require('node-addon-api').include\")"
      ],
      "cflags!": [ "-fno-exceptions" ],
      "cflags": [ "-std=c11" ],
      "cflags!": [ "-Wno-implicit-fallthrough" ]
    }
  ]
}