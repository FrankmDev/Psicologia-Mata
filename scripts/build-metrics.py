"""Uncompressed build inventory, not a browser performance measurement."""
import importlib.util
import json
from pathlib import Path

spec = importlib.util.spec_from_file_location("seo", Path(__file__).with_name("check-seo.py"))
seo = importlib.util.module_from_spec(spec)
spec.loader.exec_module(seo)
root = seo.ROOT
pages = {str(file.relative_to(root)): seo.Page(file) for file in root.rglob("*.html")}
if not pages:
    raise SystemExit("Run npm run build first.")
print(json.dumps({
    "pages": sorted(pages),
    "html_bytes": sum(file.stat().st_size for file in root.rglob("*.html")),
    "css_bytes": sum(file.stat().st_size for file in root.rglob("*.css")),
    "font_bytes": sum(file.stat().st_size for file in root.rglob("*.woff*")),
    "image_bytes": sum(file.stat().st_size for file in (root / "_astro").glob("*.webp")),
    "contact_inline_bytes": sum(len(script["text"].encode()) for script in pages["contacto/index.html"].scripts if not script.get("src")),
}, indent=2))
