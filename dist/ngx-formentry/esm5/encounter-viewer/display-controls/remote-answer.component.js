/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
var noop = function () { };
var ɵ0 = noop;
var RemoteAnswerComponent = /** @class */ (function () {
    function RemoteAnswerComponent() {
        this.innerValue = null;
        // Placeholders for the callbacks which are later providesd
        // by the Control Value Accessor
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(RemoteAnswerComponent.prototype, "dataSource", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSource;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._dataSource = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemoteAnswerComponent.prototype, "value", {
        // get accessor
        get: 
        // get accessor
        /**
         * @return {?}
         */
        function () {
            return this.innerValue;
        },
        // set accessor including call the onchange callback
        set: 
        // set accessor including call the onchange callback
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this.innerValue) {
                this.innerValue = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    // Current time string.
    // Current time string.
    /**
     * @param {?} v
     * @return {?}
     */
    RemoteAnswerComponent.prototype.writeValue = 
    // Current time string.
    /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        var _this = this;
        if (v !== this.innerValue) {
            if (this._dataSource) {
                this._dataSource.resolveSelectedValue(v).subscribe(function (ans) {
                    _this.innerValue = ans.label;
                });
            }
            else {
                this.innerValue = v;
            }
        }
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    RemoteAnswerComponent.prototype.registerOnChange = 
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    RemoteAnswerComponent.prototype.registerOnTouched = 
    // From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    RemoteAnswerComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouchedCallback();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    RemoteAnswerComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
    };
    RemoteAnswerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'remote-answer',
                    template: "\n    <div *ngIf=\"innerValue\">\n      {{innerValue}}\n      </div>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return RemoteAnswerComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    RemoteAnswerComponent.ctorParameters = function () { return []; };
    RemoteAnswerComponent.propDecorators = {
        source: [{ type: Input }],
        dataSource: [{ type: Input }]
    };
    return RemoteAnswerComponent;
}());
export { RemoteAnswerComponent };
if (false) {
    /** @type {?} */
    RemoteAnswerComponent.prototype.source;
    /** @type {?} */
    RemoteAnswerComponent.prototype.innerValue;
    /**
     * @type {?}
     * @private
     */
    RemoteAnswerComponent.prototype._dataSource;
    /**
     * @type {?}
     * @private
     */
    RemoteAnswerComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    RemoteAnswerComponent.prototype.onChangeCallback;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3RlLWFuc3dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3Blbm1ycy1mb3JtZW50cnkvIiwic291cmNlcyI6WyJlbmNvdW50ZXItdmlld2VyL2Rpc3BsYXktY29udHJvbHMvcmVtb3RlLWFuc3dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFFckMsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUVuRSxJQUFJLEdBQUcsY0FBTyxDQUFDOztBQUVyQjtJQStCSTtRQWJPLGVBQVUsR0FBRyxJQUFJLENBQUM7OztRQVdqQixzQkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMscUJBQWdCLEdBQXFCLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBWGhCLHNCQUNXLDZDQUFVOzs7O1FBRHJCO1lBRUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBQ0QsVUFBc0IsQ0FBYTtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7T0FIQTtJQVVELHNCQUFJLHdDQUFLO1FBRFQsZUFBZTs7Ozs7O1FBQ2Y7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQztRQUVELG9EQUFvRDs7Ozs7OztRQUNwRCxVQUFVLENBQU07WUFDZCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUNyQjtRQUNILENBQUM7OztPQVBBO0lBUUQsdUJBQXVCOzs7Ozs7SUFFaEIsMENBQVU7Ozs7OztJQUFqQixVQUFrQixDQUFNO1FBQXhCLGlCQVVDO1FBVEMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztvQkFDckQsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQzthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsc0NBQXNDOzs7Ozs7SUFDL0IsZ0RBQWdCOzs7Ozs7SUFBdkIsVUFBd0IsRUFBTztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQ0FBc0M7Ozs7OztJQUMvQixpREFBaUI7Ozs7OztJQUF4QixVQUF5QixFQUFPO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVNLHNDQUFNOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU0sd0NBQVE7Ozs7SUFBZixVQUFnQixLQUFVO0lBQzFCLENBQUM7O2dCQXhFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBRXpCLFFBQVEsRUFBRSx3RUFJYjtvQkFDRyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLENBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzs7Ozt5QkFFRSxLQUFLOzZCQUdMLEtBQUs7O0lBcURSLDRCQUFDO0NBQUEsQUF6RUgsSUF5RUc7U0F6RFUscUJBQXFCOzs7SUFDOUIsdUNBQTRCOztJQUM1QiwyQ0FBeUI7Ozs7O0lBQ3pCLDRDQUFnQzs7Ozs7SUFVaEMsa0RBQTZDOzs7OztJQUM3QyxpREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgZm9yd2FyZFJlZixcbiAgICBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vZm9ybS1lbnRyeS9xdWVzdGlvbi1tb2RlbHMvaW50ZXJmYWNlcy9kYXRhLXNvdXJjZSc7XG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmVtb3RlLWFuc3dlcicsXG4gICAgc3R5bGVzOiBbXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJpbm5lclZhbHVlXCI+XG4gICAgICB7e2lubmVyVmFsdWV9fVxuICAgICAgPC9kaXY+XG5gLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAge1xuICAgICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmVtb3RlQW5zd2VyQ29tcG9uZW50KSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgIH1cbiAgICBdXG4gIH0pXG5leHBvcnQgY2xhc3MgUmVtb3RlQW5zd2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzb3VyY2U6IGFueTtcbiAgICBwdWJsaWMgaW5uZXJWYWx1ZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZGF0YVNvdXJjZTogRGF0YVNvdXJjZTtcbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgZGF0YVNvdXJjZSgpOiBEYXRhU291cmNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZGF0YVNvdXJjZSh2OiBEYXRhU291cmNlKSB7XG4gICAgICAgIHRoaXMuX2RhdGFTb3VyY2UgPSB2O1xuICAgIH1cbiAgICAvLyBQbGFjZWhvbGRlcnMgZm9yIHRoZSBjYWxsYmFja3Mgd2hpY2ggYXJlIGxhdGVyIHByb3ZpZGVzZFxuICAgIC8vIGJ5IHRoZSBDb250cm9sIFZhbHVlIEFjY2Vzc29yXG4gICAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IG5vb3A7XG4gICAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgLy8gZ2V0IGFjY2Vzc29yXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lclZhbHVlO1xuICAgIH1cblxuICAgIC8vIHNldCBhY2Nlc3NvciBpbmNsdWRpbmcgY2FsbCB0aGUgb25jaGFuZ2UgY2FsbGJhY2tcbiAgICBzZXQgdmFsdWUodjogYW55KSB7XG4gICAgICBpZiAodiAhPT0gdGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHY7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEN1cnJlbnQgdGltZSBzdHJpbmcuXG5cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZSh2OiBhbnkpIHtcbiAgICAgIGlmICh2ICE9PSB0aGlzLmlubmVyVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UpIHtcbiAgICAgICAgICB0aGlzLl9kYXRhU291cmNlLnJlc29sdmVTZWxlY3RlZFZhbHVlKHYpLnN1YnNjcmliZSgoYW5zKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlubmVyVmFsdWUgPSBhbnMubGFiZWw7XG4gICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5uZXJWYWx1ZSA9IHY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICAgIH1cblxuICAgIC8vIEZyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25CbHVyKCkge1xuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNoYW5nZShldmVudDogYW55KSB7XG4gICAgfVxuICB9XG4iXX0=