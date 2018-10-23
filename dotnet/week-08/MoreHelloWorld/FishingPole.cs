namespace MoreHelloWorld
{
    class FishingPole
    {
        //property
        // [access modifier] [type] [name] {get;set;}

        // line length
        public int LineLength { get; set; } = 30;
        // reel type
        public string ReelType { get; set; }
        // pole length
        public double PoleLength { get; set; } = 4.5;
        // has hook
        public bool HasHook { get; set; }
        // brand
        public string Brand { get; set; }

        private bool IsNew { get; set; } = true;
    }

}