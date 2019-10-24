#!/bin/sh

mkdir shell_scripts
ls -l
echo "Hello I am In Shell Scripts Directory (:" > shell_scripts/output.txt
echo "Another Line with Hello" >> shell_scripts/output.txt
echo "This is a line with no match" >> shell_scripts/output.txt
echo "Lines containing Hello in shell_scripts/output.txt are:"
grep -n "Hello" shell_scripts/output.txt
echo "Lines not containing no match with Hello are:"
grep -n "no match" shell_scripts/output.txt
echo "Creating file_to_delete.txt"
ls -l
echo "file to delete" > file_to_delete.txt
ls -l
echo "contents of file to delete:"
cat file_to_delete.txt
echo "deleting file to delete..."
rm file_to_delete.txt
ls -l
echo "Recursively deleting shell scripts directory..."
rm -R shell_scripts
ls -l
echo "done with shell script :D"
