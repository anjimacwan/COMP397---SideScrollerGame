module managers {
	// Scoreboard class +++++++++++++++++++++++++++++++++++
	export class ScoreBoard {
		// PRIVATE INSTANCE VARIABLES
		private _score:number;
		private _lives:number;
		
		// PUBLIC PROPERTIES
		public setScore(value:number):void {
			this._score = value;
		}
		
		public getScore():number {
			return this._score;
		}
		
		public setLives(value:number):void {
			this._lives = value;
		}
		
		public getLives():number {
			return this._lives;
		}
		
		/**
		 * Empty Constructor
		 */
		constructor() {
			
		}
		
		// PUBLIC METHODS
		
		/**
		 * Update Method
		 */
		public update():void {
			
		}
		
		/**
		 * AddScore method - adds points to the _score
		 */
		public addScore(score:number):void {
			this._score += score;
		}
		
		/**
		 * AddLives method - adds lives to the _lives
		 */
		public addLives(lives:number):void {
			this._lives += lives;
		}
		
		/**
		 * RemoveLives method - removes lives from  _lives
		 */
		public removeLives(lives:number):void {
			this._lives -= lives;
		}
	}
}