using System;
using System.Collections.Generic;
using System.Linq;

namespace MoreHelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {

            // Arrays?
            var arr = new int[10];

            arr[3] = 10;
            arr[0] = 5;

            foreach (var item in arr)
            {
               // System.Console.WriteLine($"the item is {item}");
            }

            var myList = new List<int>() { 10, 14, 5, 6, 7, 8, 9, 2, 4, 223, 45 };
            myList.Add(10);
            myList.Add(14);

            var students = new List<string>() { "Allen", "Gabe", "Justin", "Andrew", "Michael" };


            var pole1 = new FishingPole
            {
                Brand = "Fishing Pro",
                ReelType = "Strong",
                PoleLength = 10.3,
                LineLength = 30,
                HasHook = true
            };
            var pole2 = new FishingPole
            {
                Brand = "Ooooh, feel the bass!",
                ReelType = "Weak",
                PoleLength = 14,
                LineLength = 30,
                HasHook = true
            };
            var pole3 = new FishingPole
            {
                Brand = "Marlin Express",
                ReelType = "Medium",
                PoleLength = 7,
                LineLength = 300,
                HasHook = true
            };
            var pole4 = new FishingPole
            {
                Brand = "Minnow Launcher 2001",
                ReelType = "Super Strong",
                PoleLength = 3,
                LineLength = 3,
                HasHook = false
            };

            var poleCollection = new List<FishingPole> { pole1, pole2, pole3, pole4 };

            // I want all my poles that have a length > 10 => filter
            var longPoles = poleCollection.Where(pole => pole.PoleLength > 10);
            
            System.Console.WriteLine("my Long poles:");
            foreach (var pole in longPoles)
            {
                System.Console.WriteLine($"{pole.Brand} has a length of {pole.PoleLength}");
            }

            // I want just the Brands of all of my poles => map
            var brands = poleCollection.Select(pole => pole.Brand);

            System.Console.WriteLine("My Brands are ");
            foreach (var brand in brands)
            {
                System.Console.WriteLine(brand);
            }

            var averagePoleLength = poleCollection.Average(a => a.PoleLength);

            // Give me the Brand of all the poles that a hook
            var poles = poleCollection
                    .
                    .Where(w => w.HasHook)
                    .OrderByDescending(o => o.Brand)
                    .Select(s => s.Brand)


            // Sorting!
            



        }
    }
}
