import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';


const propTypes = {
};
const defaultProps = {
};
// poprs로 받아오거나, 로컬스토리지에서 받아올 값
const user_id = 'user1';
// 로그인으로 연결하는 값
const list_footer_goto_sign = (<a className="list-footer-start list-footer-link" href=''> 시작하기 </a>)
// 글쓰기로 연결하는 값
const list_footer_goto_write = (
    <Link className="list-footer-write list-footer-link" to="/Editor/userid"> 글쓰러가기 </Link>
)
// 출력해주는 값
const list_footer_render = user_id ? list_footer_goto_write : list_footer_goto_sign;
class ListFooter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="list-footer">
              <h2 className="list-footer-title">당신의 여행 일지를 트래블러스들에게 자랑하는 공간!</h2>
              { list_footer_render }
            </div>
        );
    }
}


ListFooter.propTypes = propTypes;
ListFooter.defaultProps = defaultProps;
export default ListFooter;