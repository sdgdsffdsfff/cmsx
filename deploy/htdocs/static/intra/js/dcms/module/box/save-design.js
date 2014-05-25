/**
 * @author hongss
 * @userfor 保存设计页面和设计模板中的内容部分
 * @date  2012.02.13
 */

;(function($, D, undefined) {
    /**
     * @methed sendContent 保存设计页面和设计模板中的内容部分
     * @param opts 配置项  {container:el(jQuery对象，存储内容的容器),
     pageIdInput:input(jQuery对象，存放pageId),
     draftIdInput:input(jQuery对象，存放draftId),
     data: json(发送请求需要的参数，除pageId、draftId和content),
     //isReview:boolean(是否是预览),
     success:fn(保存成功后的回调函数),
     error:fn(保存失败后的回调函数),
     complete: fn(保存后执行，如果未修改过也执行)
     //previewUrl:url
     }
     */
    D.sendContent = {
        /*init: function(opts){
        if (!(opts['container']&&opts['pageIdInput']
        &&opts['draftIdInput']&&opts['data'])){ return; }

        if (D.BoxTools.getIsEdited()===true){
        this._requestSave(opts);
        } else {
        if (opts['isReview']===true){
        this._openReview(opts);
        }
        if (opts['aftersave'] && $.isFunction(opts['aftersave'])===true){
        opts['aftersave'].call(this);
        }
        }
        },*/
        /**
         * @methed save 保存
         * @param opts 配置项  {container:el(jQuery对象，存储内容的容器),
         *                    pageIdInput:input(jQuery对象，存放pageId),
         *                      draftIdInput:input(jQuery对象，存放draftId),
         *                        form: form(jQuery对象，form表单)
         *                  }
         */
        save : function(opts) {
            if(!(opts['container'] && opts['pageIdInput'] && opts['draftIdInput'] && opts['data'])) {
                return;
            }
            if(D.BoxTools.getIsEdited() === true) {
                this._requestSave(opts);
            } else {
                if(opts['preType'] === 'template') {//预览类型为 在当前页面预览
                    var draftId = opts['draftIdInput'].val();
                    window.location = D.domain + '/page/box/preview_template.html?flag=' + opts['flag'] + ( draftId ? '&draftId=' + draftId : '') + (opts['templateId'] ? '&templateId=' + opts['templateId'] : '') + (opts['templateType'] ? '&templateType=' + opts['templateType'] : '');
                    return;
                }
                if(opts['preType'] === 'page') {//预览类型为 在当前页面预览
                    var draftId = opts['draftIdInput'].val();
                    window.location = D.domain + '/page/box/preview_page.html?from=' + opts['from'] + ( draftId ? '&draftId=' + draftId : '') + (opts['pageId'] ? '&pageId=' + opts['pageId'] : '');
                    return;
                }
                if(opts['preType'] === 'dynamicPage') {//预览类型为 在当前页面预览
                    var draftId = opts['draftIdInput'].val();
                    window.location = D.domain + '/page/dynamic/view_page.html?action=dynamic_page_manager_action&event_submit_do_view_page=true'  + ( draftId ? '&draftId=' + draftId : '') + (opts['pageId'] ? '&pageId=' + opts['pageId'] : '');
                    return;
                }
                if(opts['complete'] && $.isFunction(opts['complete']) === true) {
                    opts['complete'].call(this);
                }
            }
        },
        /**
         * @methed save 保存
         * @param opts 配置项  {container:el(jQuery对象，存储内容的容器),
         *                        pageIdInput:input(jQuery对象，存放pageId),
         *                          draftIdInput:input(jQuery对象，存放draftId),
         *                            content:input(jQuery对象，存放content),
         *                              form: form(jQuery对象，form表单),
         *                                previewUrl:url
         *                     }
         */
        review : function(opts) {
            if(!(opts['content'] && opts['pageIdInput'] && opts['container'] && opts['previewUrl'] && opts['draftIdInput'] && opts['form'])) {
                return;
            }

            var url = D.domain + opts['previewUrl'];
            //+'?draftId=' + opts['draftIdInput'].val()
            // opts['form'].attr('target', '_blank');
            opts['form'].attr('action', url);
            opts['content'].val(this.getContainerHtml(opts['container']));
            opts['form'].submit();
        },
        /**
         * @methed _requestSave 发送保存请求
         * @param opts 配置项  同上
         */
        _requestSave : function(opts) {
            var self = this, url = D.domain + '/page/box/save_draft.htm?_input_charset=UTF-8',
            //data = {},
            pageId = opts['pageIdInput'].val(), draftId = opts['draftIdInput'].val(), tempType;
            if(opts['templateTypeInput']) {
                tempType = opts['templateTypeInput'].val();
            }

            //data['action'] = 'BoxDraftAction';
            //data['event_submit_do_savePageDraft'] = 'true';
            if(pageId) {
                opts.data['resourceId'] = pageId;
            }
            if(draftId) {
                opts.data['draftId'] = draftId;
            }
            if(tempType) {
                opts.data['templateType'] = tempType;
            }

            if(opts['flag']) {
                opts.data['isLib'] = opts['flag'];
            } else {
                opts.data['isLib'] = 'F';
            }

            opts.data['content'] = self.getContainerHtml(opts.container);

            $.ajax({
                url : url,
                type : 'POST',
                data : opts.data,
                timeout : 15000, //超时时间
                success : function(o) {
                    o = $.parseJSON(o);
                    if(o.success === true) {
                        var temp = draftId || o.draftId;
                        if(opts['preType'] === 'template') {//预览类型为 在当前页面预览
                            window.location = D.domain + '/page/box/preview_template.html?draftId=' + temp + '&flag=' + opts['flag'] + (opts['templateId'] ? '&templateId=' + opts['templateId'] : '') + (opts['templateType'] ? '&templateType=' + opts['templateType'] : '');
                            return;
                        }
                        if(opts['preType'] === 'page') {//预览类型为 在当前页面预览
                            window.location = D.domain + '/page/box/preview_page.html?draftId=' + temp + '&from=' + opts['from'] + (opts['pageId'] ? '&pageId=' + opts['pageId'] : '');
                            return;
                        }
                        if(!draftId && o.draftId) {
                            opts['draftIdInput'].val(o.draftId);
                        }
                        if(!pageId && o.pageId) {
                            opts['pageIdInput'].val(o.pageId);
                        }
                        /*if (opts['isReview']===true){
                         self._openReview(opts);
                         }*/
                        D.BoxTools.resetEdited();
                        if(opts['success'] && $.isFunction(opts['success']) === true) {
                            opts['success'].call(this, o);
                        }

                        if(opts['complete'] && $.isFunction(opts['complete']) === true) {
                            opts['complete'].call(this, o);
                        }
                    } else {
                        //保存不成功时的处理
                        if(opts['error'] && $.isFunction(opts['error']) === true) {
                            opts['error'].call(this, o);
                        } else {
                            //alert('十分抱歉，保存失败，请联系在线客服！');
                            D.Msg.error({
                                timeout : 5000,
                                message : '温馨提示:十分抱歉，保存失败，请联系在线客服！'
                            });
                        }
                    }
                },
                error : function(o) {
                    //保存不成功时的处理
                    if(opts['error'] && $.isFunction(opts['error']) === true) {
                        opts['error'].call(this, o);
                    } else {
                        D.Msg.error({
                            timeout : 5000,
                            message : '温馨提示:十分抱歉，保存失败，请联系在线客服！'
                        });
                    }
                }
            });
        },
        /**
         * @methed getContainerHtml 获取容器的HTML代码，主要工作在剔除系统额外加的内容与class名上
         * @param container 指定容器
         */
        getContainerHtml : function(container) {
            var div = $('<div />'), CONSTANTS = D.sendContent.CONSTANTS;
            //div.html(container.html());
            D.InsertHtml.init(container.html(), div, 'html', false);
            //去除“编辑内容”时加的class名
            this._removeClassName(div, CONSTANTS.ENABLE_EDIT_AREA_CLASS_NAME);
            //去除“编辑控件”时加的class名
            this._removeClassName(div, CONSTANTS.ENABLE_EDIT_CELL_CLASS_NAME);
            //去除“当前元素”高亮时加的class名
            this._removeClassName(div, CONSTANTS.TARGET_CURRENT_CLASS_NAME);
            this._removeClassName(div, CONSTANTS.LAYOUT_HIGHT_CLASS_NAME);
            //去除“JS失效”时高亮加的class名
            this._removeClassName(div, CONSTANTS.JS_CONTROL_CURRENT);
            //删除允许前后插入的标识代码
            this._removeElements(div, '.' + CONSTANTS.ENABLE_BEFORE_CLASS_NAME + ', .' + CONSTANTS.ENABLE_AFTER_CLASS_NAME);
            this._removeClassName(div, CONSTANTS.HEIGHT_LIGHT_CELL_CURRENT);
            
            //去除错误信息
            this._removeElements(div, '.'+D.box.editor.config.CLASS_ERROR_MESSAGE);
            this._removeClassName(div, D.box.editor.config.CLASS_POSITION_RELATIVE);
            
            return div.html();
        },
        /**
         * @methed _romveClassName 移除class名
         * @param container 指定容器
         */
        _removeClassName : function(container, className) {
            container.find('.' + className).removeClass(className);
        },
        /**
         * @methed _removeElements 移除元素
         * @param container 指定容器
         */
        _removeElements : function(container, selector) {
            container.find(selector).remove();
        },
        /**
         * @methed _openReview 打开预览页面
         * @param opts 配置项，见最上面的注释
         */
        _openReview : function(opts) {
            var pageId = opts['pageIdInput'].val(), url = D.domain + opts['previewUrl'] + '?draftId=' + opts['draftIdInput'].val();
            if(pageId) {
                url += '&pageId=' + pageId;
            }
            window.open(url);
        }
    }

    D.sendContent.CONSTANTS = {
        ENABLE_EDIT_AREA_CLASS_NAME : 'crazy-box-edit-area', //“编辑内容”时加的class名
        ENABLE_EDIT_CELL_CLASS_NAME : 'crazy-box-edit-cell', //“编辑控件”时加的class名
        TARGET_CURRENT_CLASS_NAME : 'crazy-box-target-current', //“当前元素”高亮时加的class名
        ENABLE_BEFORE_CLASS_NAME : 'crazy-box-before-singer', //允许在前面插入内容的标识class名
        ENABLE_AFTER_CLASS_NAME : 'crazy-box-after-singer', //允许在后面插入内容的标识class名
        JS_CONTROL_CURRENT : 'crazy-box-control-current', //“JS失效”时高亮加的class名
        LAYOUT_HIGHT_CLASS_NAME : 'hight-light-red',
        HEIGHT_LIGHT_CELL_CURRENT : 'crazy-box-cell-current'   //“当前cell”高亮时加的class名
    }

})(dcms, FE.dcms);
