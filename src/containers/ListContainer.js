import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
// 컴포넌트
import List from '../components/List/List';
// 유틸
import * as utils from '../utils/ListUtils';

const mapStateToProps = (state) => {
    return {
        app_lists: state.getDB.DB_lists,
        sorted_list: state.list,
        errors: state.Errors
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleListSortByLastest : (lists) => {
        const sorted_list_item_array = utils.getListSortByLastest(lists);
        dispatch(actions.listSortByLastest(sorted_list_item_array));
        return sorted_list_item_array;
    },
    handleListSortByPopular: (lists) => {
        const sorted_list_item_array = utils.getListSortByPopular(lists);
        dispatch(actions.listSortByPopular(sorted_list_item_array));
    },
    handleListLocationSearch: (lists) => dispatch(actions.listLocationSearch(lists)),
    handleListPageCount: (lists) => {
        const page_amount = utils.getListPageAmount(lists);
        dispatch(actions.listPageCount(page_amount))
    },
    handleListPageIndexing: () => {
        dispatch(actions.listPageIndexing(index));
    },
    throwSearchErrorMessage: (error_type, message) => dispatch(actions.throwSearchErrorMessage(error_type, message))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);