import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as UserIcon} from '../../assets/images/user.svg';
import { ReactComponent as PhoneIcon} from '../../assets/images/phone.svg';
import { ReactComponent as CaretIcon} from '../../assets/images/caret.svg';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<header className="ins-header clearfix">
				<div className="wrapper clearfix">
					<div className="ins-header__brand">
						<a href="#">
							<img src={Logo} />
						</a>
					</div>

					<ul className="ins-header__contacts-info">
						<li className="ins-header__contact-info__item">
							<span className="ins-header__contact-info__item__icon">
								<PhoneIcon />
							</span>

							<span className="ins-header__contact-info__item__text">(11) 3569 - 3465</span>
						</li>
					</ul>

					<div className="ins-header__user">
						<div className="ins-header__user__head">
							<div className="ins-header__user__head__picture">
								<UserIcon />
							</div>

							<span className="ins-header__user__head__name">User Test</span>

							<span className="ins-header__user__head__caret">
								<CaretIcon />
							</span>
						</div>
					</div>
				</div>
			</header>
		);
	}
}