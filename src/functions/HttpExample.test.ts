import { expect, describe, it } from 'vitest';
import { arrayBuffer } from 'stream/consumers';
import { HttpExample } from './HttpExample';
import { HttpRequest, InvocationContext, HttpRequestInit } from '@azure/functions';
import { http } from '@azure/functions/types/app';

describe('HttpExample', () => {
  it('should return "Hello, world!" when no query parameter is provided', async () => {
    const req = new HttpRequest({
      url: 'http://example.com',
      query: {},
      method: 'GET',
    });
    const context = new InvocationContext();
    const result = await HttpExample(req, context);
    expect(result.body).toBe('Hello, world!');
  });

  it('should return "Hello, ABC!" when query parameter is "ABC"', async () => {
    const req = new HttpRequest({
        url: 'http://example.com/',
        query: {name: 'ABC'},
        method: 'GET',
      });
    const context = new InvocationContext();
    const result = await HttpExample(req, context);
    expect(result.body).toBe('Hello, ABC!');
  });

  it('should return "Hello, XYZ!" when request body is "XYZ"', async () => {
    const req = new HttpRequest({
      url: 'http://example.com/',
      query: {name: 'XYZ'},
      method: 'POST',
    });
    const context = new InvocationContext();
    const result = await HttpExample(req, context);
    expect(result.body).toBe('Hello, XYZ!');
  });
});