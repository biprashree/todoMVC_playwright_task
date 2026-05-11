import { Page, Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly todoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.todoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.locator('.todo-list li');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(todoText: string) {
    await this.todoInput.fill(todoText);
    await this.todoInput.press('Enter');
  }

  async completeFirstTodo() {
    await this.todoItems.first().getByRole('checkbox').check();
  }

  async clickActiveFilter() {
    await this.page.getByRole('link', { name: 'Active' }).click();
  }

  async clickCompletedFilter() {
    await this.page.getByRole('link', { name: 'Completed' }).click();
  }

  async clearCompleted() {
    const clearButton = this.page.getByRole('button', {
      name: 'Clear completed',
    });

    if (await clearButton.isVisible()) {
      await clearButton.click();
    }
  }
}