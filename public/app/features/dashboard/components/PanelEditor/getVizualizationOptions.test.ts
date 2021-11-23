import { EventBusSrv } from '@grafana/data';
import { getStandardEditorContext } from './getVizualizationOptions';

describe('getStandardEditorContext', () => {
  it('gets standard editor context', () => {
    const editorContext = getStandardEditorContext({
      data: undefined,
      replaceVariables: jest.fn(),
      options: {},
      eventBus: new EventBusSrv(),
      instanceState: {},
    });

    expect(editorContext.data).toEqual([]);
  });

  it('returns suggestions for empty data', () => {
    const editorContext = getStandardEditorContext({
      data: undefined,
      replaceVariables: jest.fn(),
      options: {},
      eventBus: new EventBusSrv(),
      instanceState: {},
    });

    expect(editorContext.getSuggestions).toBeDefined();
    expect(editorContext.getSuggestions?.()).toEqual([]);
  });
});
