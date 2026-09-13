---
name: DOCX article imports
description: How to preserve editorial instructions and links when implementing articles supplied as Word documents.
---

For supplied DOCX articles, do not rely on plain-text extraction alone. Inspect the OOXML comment ranges and hyperlink relationships, then verify that every instruction, linked phrase, and target survives in the rendered article.

**Why:** The normal document text view preserves visible copy but can silently omit comments and hyperlink destinations, producing a page that looks complete while losing citations, internal links, and conversion instructions.

**How to apply:** When a DOCX is the content source, compare its comments and relationship targets against the final rendered HTML before completion.