/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-textarea.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-autogrow-textarea/iron-autogrow-textarea.d.ts" />
/// <reference path="../iron-form-element-behavior/iron-form-element-behavior.d.ts" />
/// <reference path="paper-input-behavior.d.ts" />
/// <reference path="paper-input-char-counter.d.ts" />
/// <reference path="paper-input-container.d.ts" />
/// <reference path="paper-input-error.d.ts" />

/**
 * `<paper-textarea>` is a multi-line text field with Material Design styling.
 *
 *     <paper-textarea label="Textarea label"></paper-textarea>
 *
 * See `Polymer.PaperInputBehavior` for more API docs.
 *
 * ### Validation
 *
 * Currently only `required` and `maxlength` validation is supported.
 *
 * ### Styling
 *
 * See `Polymer.PaperInputContainer` for a list of custom properties used to
 * style this element.
 */
interface PaperTextareaElement extends Polymer.Element, Polymer.PaperInputBehavior, Polymer.IronFormElementBehavior {
  value: string|null|undefined;
  _ariaDescribedBy: string|null|undefined;
  _ariaLabelledBy: string|null|undefined;
  readonly _focusableElement: any;

  /**
   * The initial number of rows.
   */
  rows: number;

  /**
   * The maximum number of rows this element can grow to until it
   * scrolls. 0 means no maximum.
   */
  maxRows: number;
  selectionStart: number;
  selectionEnd: number;
  _ariaLabelledByChanged(ariaLabelledBy: any): void;
  _ariaDescribedByChanged(ariaDescribedBy: any): void;
}

interface HTMLElementTagNameMap {
  "paper-textarea": PaperTextareaElement;
}
