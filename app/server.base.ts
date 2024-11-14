import type { HttpBindings } from "@hono/node-server";
import type { Context } from "hono";

export const getLoadContext = (c: Context<{ Bindings: HttpBindings }>) => {
  return {
    remoteAddress: c.env.incoming.socket.remoteAddress,
  };
};
