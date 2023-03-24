function urlRoutingFunction(mapping) {
  console.log();
  console.log('URL ROUTING:', JSON.stringify(mapping, null, 2));
  console.log();

  return function (req) {
    const url = req.url;
    const hostPort = mapping[url];
    if (!hostPort) {
      throw new Error(`No mapping found for URL: ${url}`);
    }

    const [host, port] = hostPort.split(":");

    return {
      host,
      port: parseInt(port, 10),
    };
  };
}

function envRoutingFunction() {
  const ORIGIN_PORT = process.env["ORIGIN_PORT"] || 28052;
  const ORIGIN_HOST = process.env["ORIGIN_HOST"] || "localhost";

  console.log();
  console.log(`ORIGIN PORT: ${ORIGIN_PORT}`);
  console.log(`ORIGIN HOST: ${ORIGIN_HOST}`);
  console.log();

  return {
    host: ORIGIN_HOST,
    port: ORIGIN_PORT,
  };
}

module.exports = {urlRoutingFunction, envRoutingFunction};
