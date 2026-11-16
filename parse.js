import { Marked } from './vendor/marked/marked.esm.js';

const engine = new Marked({ gfm: true, breaks: false, pedantic: false, async: false });
const lexer = new engine.Lexer(engine.defaults);
const parser = new engine.Parser(engine.defaults);

// Reuse grammar, tokenizer and renderer, but never document-local state.
export function parse(markdown) {
  lexer.tokens = [];
  lexer.tokens.links = Object.create(null);
  lexer.inlineQueue.length = 0;
  const state = lexer.state;
  state.inLink = false;
  state.inRawBlock = false;
  state.linkEmitted = false;
  state.linkParenPossible = true;
  state.top = true;
  // Keep the inline work queue rather than allocating a replacement per call.
  lexer.blockTokens(markdown.replace(/\r\n|\r/g, '\n'), lexer.tokens);
  const queue = lexer.inlineQueue;
  for (let i = 0; i < queue.length; i++) {
    state.inRawBlock = false;
    lexer.inlineTokens(queue[i].src, queue[i].tokens);
  }
  queue.length = 0;
  return parser.parse(lexer.tokens);
}
