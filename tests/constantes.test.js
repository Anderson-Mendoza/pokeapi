
import { getListaPoke } from "../src/domElements.js";




describe('getListPoke', () => {
    test('deberia reornar el elemento id "todos" ', () => {
        const mockElement = document.createElement("div");
        const mockFn = jest.fn();
        mockFn.mockReturnValue(mockElement);

        document.getElementById = mockFn;
        const result = getListaPoke();

        expect(mockFn).toHaveBeenCalledWith('todos');
        expect(result).toBe(mockElement);
    });
})
