    self.__uv$config = {
        prefix: '/static/frog/',
        bare: "https://bare-sigma.yourmom.eu.org",
        encodeUrl: Ultraviolet.codec.xor.encode,
        decodeUrl: Ultraviolet.codec.xor.decode,
        handler: '/static/uv/uv.handler.js',
        bundle: '/static/uv/uv.bundle.js',
        config: '/static/uv/uv.config.js',
        sw: '/static/uv/uv.sw.js',
    };
