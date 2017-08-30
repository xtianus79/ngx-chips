import { EventEmitter, Renderer2, OnInit, TemplateRef, QueryList, AfterViewInit } from '@angular/core';
import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { TagInputAccessor, TagModel } from '../../core';
import { DragProvider } from '../../core/providers';
import { TagInputForm, TagInputDropdown, TagComponent } from '../../components';
export declare class TagInputComponent extends TagInputAccessor implements OnInit, AfterViewInit {
    private readonly renderer;
    readonly dragProvider: DragProvider;
    separatorKeys: string[];
    separatorKeyCodes: number[];
    placeholder: string;
    secondaryPlaceholder: string;
    maxItems: number;
    validators: ValidatorFn[];
    asyncValidators: AsyncValidatorFn[];
    onlyFromAutocomplete: boolean;
    errorMessages: {
        [key: string]: string;
    };
    theme: string;
    onTextChangeDebounce: number;
    inputId: string;
    inputClass: string;
    clearOnBlur: boolean;
    hideForm: boolean;
    addOnBlur: boolean;
    addOnPaste: boolean;
    pasteSplitPattern: string;
    blinkIfDupe: boolean;
    removable: boolean;
    editable: boolean;
    allowDupes: boolean;
    modelAsStrings: boolean;
    trimTags: boolean;
    inputText: string;
    ripple: boolean;
    tabindex: string;
    disabled: boolean;
    dragZone: string;
    onRemoving: ((tag: TagModel) => Observable<TagModel>) | undefined;
    onAdding: ((tag: TagModel) => Observable<TagModel>) | undefined;
    animationDuration: {
        enter: string;
        leave: string;
    };
    onAdd: EventEmitter<TagModel>;
    onRemove: EventEmitter<TagModel>;
    onSelect: EventEmitter<TagModel>;
    onFocus: EventEmitter<string>;
    onBlur: EventEmitter<string>;
    onTextChange: EventEmitter<TagModel>;
    onPaste: EventEmitter<string>;
    onValidationError: EventEmitter<TagModel>;
    onTagEdited: EventEmitter<TagModel>;
    dropdown: TagInputDropdown;
    templates: QueryList<TemplateRef<any>>;
    inputForm: TagInputForm;
    selectedTag: TagModel | undefined;
    isLoading: boolean;
    tags: QueryList<TagComponent>;
    private listeners;
    inputTextChange: EventEmitter<string>;
    inputTextValue: string;
    readonly tabindexAttr: string;
    animationMetadata: {
        value: string;
        params: object;
    };
    constructor(renderer: Renderer2, dragProvider: DragProvider);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    onRemoveRequested(tag: TagModel, index: number): void;
    onAddingRequested(fromAutocomplete: boolean, tag: TagModel, index?: number): void;
    appendTag: (tag: TagModel, index?: number) => void;
    createTag: (model: TagModel) => TagModel;
    selectItem(item: TagModel | undefined, emit?: boolean): void;
    fireEvents(eventName: string, $event?: any): void;
    handleKeydown(data: any): void;
    setInputValue(value: string): void;
    private getControl();
    focus(applyFocus?: boolean, displayAutocomplete?: boolean): void;
    blur(): void;
    hasErrors(): boolean;
    isInputFocused(): boolean;
    hasCustomTemplate(): boolean;
    readonly maxItemsReached: boolean;
    readonly formValue: string;
    onDragStarted(event: DragEvent, tag: TagModel, index: number): void;
    onDragOver(event: DragEvent, index?: number): void;
    onTagDropped(event: DragEvent, index: number): void;
    isDropping(): boolean;
    onTagBlurred(changedElement: TagModel, index: number): void;
    trackBy(item: TagModel): string;
    private isTagValid(tag, fromAutocomplete?);
    private moveToTag(item, direction);
    private getTagIndex(item);
    private getTagAtIndex(index);
    private removeItem(tag, index);
    private addItem(fromAutocomplete, item, index?);
    private setupSeparatorKeysListener();
    private setUpKeypressListeners();
    private setUpInputKeydownListeners();
    private setUpOnPasteListener();
    private setUpTextChangeSubscriber();
    private setUpOnBlurSubscriber();
    private findDupe(tag, isFromAutocomplete);
    private onPasteCallback;
    private setAnimationMetadata();
}
