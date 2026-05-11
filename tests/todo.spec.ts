import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test.describe('TodoMVC Tests', () => {
  test('should add, complete and filter todo items', async ({ page }) => {
    const todoPage = new TodoPage(page);

    await todoPage.goto();

    // Add first todo
    await todoPage.addTodo('Learn Playwright');

    await expect(todoPage.todoItems).toContainText([
      'Learn Playwright',
    ]);

    // Add second todo
    await todoPage.addTodo('Write tests');

    await expect(todoPage.todoItems).toHaveCount(2);

    // Complete first todo
    await todoPage.completeFirstTodo();

    // Verify completed filter
    await todoPage.clickCompletedFilter();

    await expect(todoPage.todoItems).toContainText([
      'Learn Playwright',
    ]);

    await expect(todoPage.todoItems).toHaveCount(1);

    // Verify active filter
    await todoPage.clickActiveFilter();

    await expect(todoPage.todoItems).toContainText([
      'Write tests',
    ]);

    await expect(todoPage.todoItems).toHaveCount(1);

    // Optional cleanup
    await todoPage.clickCompletedFilter();
    await todoPage.clearCompleted();
  });
});