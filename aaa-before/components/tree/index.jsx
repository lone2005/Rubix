import * as React from 'react';
import RcTree, { TreeNode } from 'rc-tree';
import animation from '../_util/openAnimation';
export class AntTreeNode extends React.Component {
    render() {
        return <AntTreeNode {...this.props}/>;
    }
}
export default class Tree extends React.Component {
    render() {
        const props = this.props;
        let checkable = props.checkable;
        return (<RcTree {...props} checkable={checkable ? (<span className={`${props.prefixCls}-checkbox-inner`}></span>) : checkable}>
        {this.props.children}
      </RcTree>);
    }
}
Tree.TreeNode = TreeNode;
Tree.defaultProps = {
    prefixCls: 'rubix-tree',
    checkable: false,
    showIcon: false,
    openAnimation: animation,
};
