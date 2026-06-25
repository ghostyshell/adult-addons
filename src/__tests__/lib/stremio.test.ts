import { manifestUrl, stremioInstallUrl } from "@/lib/stremio";

describe("stremio URLs", () => {
  it("builds manifest URL for TPB addon host", () => {
    expect(manifestUrl("https://tpb-adult-addon.click")).toBe(
      "https://tpb-adult-addon.click/manifest.json",
    );
  });

  it("builds Stremio web install link", () => {
    const url = stremioInstallUrl("https://tpb-adult-addon.click");
    expect(url).toContain("stremio.com/shell");
    expect(url).toContain(encodeURIComponent("https://tpb-adult-addon.click/manifest.json"));
  });
});
