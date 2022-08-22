import { renderHook, act } from '@testing-library/react';
import useShow from './useShow';

describe('useShow', () => {
  describe('shouldShow state', () => {
    it('should be false by default', () => {
      const { result } = renderHook(() => useShow());
      expect(result.current.shouldShow).toBe(false);
    });
  });

  describe('showElement function', () => {
    it("should result in show state being 'true'", () => {
      const { result } = renderHook(() => useShow());

      expect(typeof result.current.showElement).toBe('function');
      act(() => {
        result.current.showElement();
      });
      expect(result.current.shouldShow).toBe(true);
    });
  });

  describe('hideElement function', () => {
    test("should result in show state being 'false'", () => {
      const { result } = renderHook(() => useShow());

      expect(typeof result.current.hideElement).toBe('function');
      act(() => {
        result.current.hideElement();
      });
      expect(result.current.shouldShow).toBe(false);
    });
  });

  describe('toggleShow function', () => {
    it('should toggle the show state', () => {
      const { result } = renderHook(() => useShow());

      expect(typeof result.current.toggleShow).toBe('function');

      expect(result.current.shouldShow).toBe(false);

      act(() => {
        result.current.toggleShow();
      });

      expect(result.current.shouldShow).toBe(true);

      act(() => {
        result.current.toggleShow();
      });

      expect(result.current.shouldShow).toBe(false);
    });
  });
});
