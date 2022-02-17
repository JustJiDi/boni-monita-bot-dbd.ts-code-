const func = {
    name: "$js",
    description: "Execute javascript code",
    brackets: true,
    execute: async (d, fn) => {

        // fs, path y os
        const fs = require("fs")
        const Path = require("path")
                const os = require('os')
                const cpu = os.cpus()[0]

        // axios
        const axios = require('axios').default

        // Exec
        let cld = require("child_process")
        const exec = async (data) => {
          return await cld.execSync(data)
        }

        // New options
        d.author = d.data?.message?.author
        d.guild = d.data?.message?.guild
        d.channel = d.data?.message?.channel

        let [re, code, maxData=0] = await fn.resolveArray(d)
        let r = undefined;
        try {
            r = await eval(code)
        } catch (error) {
            return d.sendError(fn, `:x: Error: \`${error.message}\``)
        }

        if (typeof r == "object") r = require("util").inspect(r, { depth: maxData })

        return fn.resolve(
            String(re) == "true" ? r : ''
    )
    },
    fields: [
        {
            name: "return",
            required: true,
            type: "BOOlEAN"
        },
        {
            name: "code",
            required: true,
            type: "STRING"
        },
        {
            name: "max",
            required: false,
            type: "NUMBER"
        }
    ]
}

module.exports = func