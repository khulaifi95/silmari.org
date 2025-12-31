---
title: "The State of LLMs in 2025"
description: "Progress, problems and predictions."
pubDatetime: 2025-12-31T00:00:00Z
tags: ["ai", "llm", "2025"]
featured: true
draft: false
---

Hello this is my first post here, which happens to be a short wrap-up of this year's progress in AI.

## Progress

### 1. GRPO + RLVR
Reinforcement Learning with Verifiable Rewards (RLVR), combined with techniques like Group Relative Policy Optimization (GRPO), has emerged as a potent recipe for improving reasoning. By training models to optimize for correct final answers in domains like math and coding—where verification is deterministic—we've seen models internalize better reasoning chains without needing massive human-annotated thought data.

### 2. Inference scaling
The paradigm has shifted from "bigger models" to "thinking longer." We learned that scaling compute at inference time (giving the model more time to generate hidden chains of thought) can yield performance gains equivalent to massive increases in pre-training scale. This allows smaller models to punch above their weight on complex logical tasks.

### 3. Coding agents with tools
Coding assistants have evolved from fancy autocomplete to semi-autonomous agents. Tools like Model Context Protocol (MCP) and deep IDE integrations allow agents to read files, run terminal commands, and browse the web. They don't just suggest code; they act as engineers that can diagnose errors, refactor codebases, and implement multi-file features.

## Problems

### 1. Benchmark and real-world discrepancy
"SOTA" fatigue is setting in. While models routinely crush benchmarks like SWE-bench or MMLU, their performance in messy, proprietary, or legacy codebases often feels lackluster. The gap between a sterile test environment and the chaos of real-world production engineering remains a primary frustration for adopters.

### 2. Vibe coding burnout and fatigue
"Vibe coding"—writing code by prompting rather than typing—is exhilarating until it isn't. The ease of generating boilerplate has led to bloated codebases and a new type of debt: code that no one truly understands. Developers are reporting fatigue from constantly reviewing and debugging confident but subtly wrong AI-generated logic.

### 3. Model architecture kind of stuck
Despite the hype, the underlying architecture remains overwhelmingly Transformer-based. While we've seen optimizations like Mixture of Experts (MoE) and attention variants become standard, there hasn't been a fundamental "post-Transformer" breakthrough that solves O(n^2) attention costs or hallucination at a structural level.

## Predictions

### 1. Efficient deployment of memory system for open-sourced LLMs
We will likely see a standardization of "memory" layers for open-weights models. Moving beyond naive RAG, these systems will allow local models to efficiently retain and recall project-specific context (user preferences, codebase knowledge) across sessions without prohibitive VRAM costs, making local assistants far more personalized.

### 2. Unified multi-modal encoding in LLMs
The era of gluing a vision encoder onto a text model is ending. Future models will likely feature unified tokenization where text, image, and audio are treated as native, interchangeable inputs during pre-training. This will unlock deeper understanding of nuance, pacing, and visual context that current "Frankenstein" multi-modal models miss.

### 3. First real "Cursor for X" product
The "AI-native editor" UX pioneered by Cursor for code will successfully translate to another vertical—likely legal drafting, screenwriting, or UI design. This won't just be a chatbot sidebar; it will be a tool where the AI has deep awareness of the document state and can manipulate the "canvas" directly, changing how professionals in that field work.