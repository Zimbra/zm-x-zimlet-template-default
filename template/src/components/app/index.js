import { h, Component } from 'preact';
import { provide } from 'preact-context-provider';
import { withIntl } from '../../enhancers';
import wire from 'wiretie';
import style from './style';
// Can also use shimmed decorators like graphql or withText.
// Or, utils, like callWtih. Refer to zm-x-web, zimbraManager/shims.js
// More shims can be added here if necessary; also requires an update to zimlet-cli

export default function createApp(context) {

	@withIntl
	@provide({ zimbraComponents: context.components }) //get components from context, and provide as a variable called
	@wire('zimbraComponents', null, ({ Sidebar }) => ({ Sidebar })) //extract your component(s) for use
	class App extends Component {

		render({ Sidebar }) {
			return (
				<div class={style.wrapper}>
					{/*Example of using component from ZimbraX client, in this case, Sidebar*/}
					<Sidebar>
						<h3>Links</h3>
						<ol>
							<li>
								<a href="https://lonni.me">lonni.me</a>
							</li>
							<li>
								<a href="https://github.com/zimbra/zimlet-cli">zimlet-cli</a>
							</li>
						</ol>
					</Sidebar>
					<div class={style.main}>
						Hello World
					</div>
				</div>
			);
		}
	}

	return App;

}
