import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";

export const projectId = "ynokabxv";
export const dataset = "production";
export const apiVersion = "2023-07-01";

export function getClient(preview?: { token?: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: "published",
  });
  if (preview) {
    if (!preview.token) {
      throw new Error(
        "Attempted to activate Preview but a token was not provided"
      );
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
}
